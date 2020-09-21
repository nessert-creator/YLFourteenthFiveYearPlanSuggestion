using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Messagers.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.UI;
using Castle.Core.Internal;

namespace QC.MF.Messagers
{
    public class MessageAppService : AsyncMFCrudAppService<Message.Message, GetListMessageDto, PagedSortedAndFilteredInputDto, CreateMessageDto, UpdateMessageDto>, IMessageAppService
    {
        private IRepository<Messager.Messager> _messagerRepository;
        public MessageAppService(
            IRepository<Message.Message, int> repository,
            IRepository<Messager.Messager> messagerRepository
            ) : base(repository)
        {
            _messagerRepository = messagerRepository;
        }


        public async Task CommitMessage(CommitMessageInput input)
        {
            if (string.IsNullOrWhiteSpace(input.Name))
            {
                throw new UserFriendlyException("请留下您的姓名，便于我们联系您！");
            }
            if (string.IsNullOrWhiteSpace(input.Email))
            {
                throw new UserFriendlyException("请留下您的邮箱地址，便于我们联系您！");
            }
            if (string.IsNullOrWhiteSpace(input.PhoneNumber))
            {
                throw new UserFriendlyException("请留下您的电话号码，便于我们联系您！");
            }
            if (string.IsNullOrWhiteSpace(input.Name))
            {
                throw new UserFriendlyException("请留下您的身份类别，便于我们联系您！");
            }

            if (input.Messages.IsNullOrEmpty()
                || input.Messages.All(m => string.IsNullOrWhiteSpace(m.Message)))
            {
                throw new UserFriendlyException("请留下您的宝贵意见，便于我们联系您！");
            }

            var messager = await _messagerRepository.GetAll()
                .Where(m => m.Name == input.Name
                            && (m.PhoneNumber == input.PhoneNumber || m.Email == input.Email))
                .FirstOrDefaultAsync();

            if (messager == null)
            {
                messager = new Messager.Messager
                {
                    Name = input.Name,
                    Email = input.Email,
                    PhoneNumber = input.PhoneNumber,
                    IdentityType = input.IdentityType,
                    Organization = input.Organization
                };
                await _messagerRepository.InsertAsync(messager);
                await UnitOfWorkManager.Current.SaveChangesAsync();
            }

            foreach (var message in input.Messages)
            {
                var entity = new Message.Message
                {
                    MessagerId = messager.Id,
                    TopicId = message.TopicId,
                    Content = message.Message
                };
                await Repository.InsertAsync(entity);
            }
            await UnitOfWorkManager.Current.SaveChangesAsync();
        }
    }
}

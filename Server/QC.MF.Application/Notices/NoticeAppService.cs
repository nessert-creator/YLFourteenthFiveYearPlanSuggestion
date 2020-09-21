using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Notices.Dto;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace QC.MF.Notices
{
    public class NoticeAppService : AsyncMFCrudAppService<Notice.Notice, GetListNoticeDto, PagedSortedAndFilteredInputDto, CreateNoticeDto, UpdateNoticeDto>, INoticeAppService
    {
        public NoticeAppService(IRepository<Notice.Notice, int> repository) : base(repository)
        {
        }

        public async override Task<GetListNoticeDto> Create(CreateNoticeDto input)
        {
            var entities = await Repository.GetAll().Where(n => n.IsUsing).ToListAsync();
            foreach (var entity in entities)
            {
                entity.IsUsing = false;
            }
            await UnitOfWorkManager.Current.SaveChangesAsync();

            return await base.Create(input);
        }

        public async Task<GetNoticeDto> GetUsingNotice()
        {
            var entity = await Repository.FirstOrDefaultAsync(t => t.IsUsing);

            return entity.MapTo<GetNoticeDto>();
        }
    }
}

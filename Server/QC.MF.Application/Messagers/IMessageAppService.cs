using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Messagers.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Messagers
{
    public interface IMessageAppService : IAsyncCrudAppService<GetListMessageDto, int, PagedSortedAndFilteredInputDto, CreateMessageDto, UpdateMessageDto>
    {
        Task CommitMessage(CommitMessageInput input);
    }
}

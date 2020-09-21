using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Notices.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Notices
{
    public interface INoticeAppService : IAsyncCrudAppService<GetListNoticeDto, int, PagedSortedAndFilteredInputDto, CreateNoticeDto, UpdateNoticeDto>
    {
        Task<GetNoticeDto> GetUsingNotice();
    }
}

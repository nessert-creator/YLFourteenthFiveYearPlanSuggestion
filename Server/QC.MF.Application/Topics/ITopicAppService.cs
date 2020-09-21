using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Topics.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Topics
{
    public interface ITopicAppService : IAsyncCrudAppService<GetListTopicDto, int, PagedSortedAndFilteredInputDto, CreateTopicDto, UpdateTopicDto>
    {
    }
}

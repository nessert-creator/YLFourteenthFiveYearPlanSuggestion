using Abp.Application.Services;
using QC.MF.CommonDto;
using QC.MF.Messages.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Messages
{
    public interface IMessagerAppService : IAsyncCrudAppService<GetListMessagerDto, int, PagedSortedAndFilteredInputDto, CreateMessagerDto, UpdateMessagerDto>
    {
    }
}

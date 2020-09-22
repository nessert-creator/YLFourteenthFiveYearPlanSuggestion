using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Messages.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Authorization;

namespace QC.MF.Messages
{
    [AbpAuthorize()]
    public class MessagerAppService : AsyncMFCrudAppService<Messager.Messager, GetListMessagerDto, PagedSortedAndFilteredInputDto, CreateMessagerDto, UpdateMessagerDto>, IMessagerAppService
    {
        public MessagerAppService(IRepository<Messager.Messager, int> repository) : base(repository)
        {
        }
    }
}

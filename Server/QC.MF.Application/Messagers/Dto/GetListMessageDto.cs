using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using QC.MF.Messages.Dto;
using QC.MF.Topics.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Messagers.Dto
{
    [AutoMap(typeof(Message.Message))]
    public class GetListMessageDto : CreateMessageDto, IEntityDto<int>
    {
        public int Id { get; set; }

        public GetMessagerDto Messager { get; set; }

        public GetTopicDto Topic { get; set; }
    }
}

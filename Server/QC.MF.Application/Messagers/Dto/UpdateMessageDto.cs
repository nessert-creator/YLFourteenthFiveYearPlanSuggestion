using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Messagers.Dto
{
    [AutoMap(typeof(Message.Message))]
    public class UpdateMessageDto : CreateMessageDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}

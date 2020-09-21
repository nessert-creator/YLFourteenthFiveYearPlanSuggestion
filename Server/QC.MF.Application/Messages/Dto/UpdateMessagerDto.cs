using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Messages.Dto
{
    [AutoMap(typeof(Messager.Messager))]
    public class UpdateMessagerDto : CreateMessagerDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}

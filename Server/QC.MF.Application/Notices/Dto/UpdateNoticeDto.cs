using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Notices.Dto
{
    [AutoMap(typeof(Notice.Notice))]
    public class UpdateNoticeDto : CreateNoticeDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}

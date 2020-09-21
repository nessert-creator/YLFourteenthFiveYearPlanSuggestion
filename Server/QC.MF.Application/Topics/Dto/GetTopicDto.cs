using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Topics.Dto
{
    [AutoMap(typeof(Topic.Topic))]
    public  class GetTopicDto : GetListTopicDto
    {
    }
}

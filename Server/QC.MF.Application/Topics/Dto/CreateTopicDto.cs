using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Topics.Dto
{
    [AutoMap(typeof(Topic.Topic))]
    public class CreateTopicDto
    {
        /// <summary>
        /// 主题名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 主题图标
        /// </summary>
        public string Icon { get; set; }
    }
}

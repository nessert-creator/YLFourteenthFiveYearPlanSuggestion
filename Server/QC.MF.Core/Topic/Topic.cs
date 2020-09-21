using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Topic
{
    public class Topic : FullAuditedEntity, IIdNameEntity
    {
        /// <summary>
        /// 主题名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 主题图标
        /// </summary>
        public string Icon { get; set; }

        /// <summary>
        /// 留言列表
        /// </summary>
        [ForeignKey("TopicId")]
        public virtual ICollection<Message.Message> Messages { get; set; }
    }
}

using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Message
{
    public class Message : FullAuditedEntity
    {
        /// <summary>
        /// 留言者Id
        /// </summary>
        public int MessagerId { get; set; }


        /// </summary>
        [ForeignKey("MessagerId")]
        public virtual Messager.Messager Messager { get; set; }

        /// <summary>
        /// 留言主题
        /// </summary>
        public int TopicId { get; set; }


        /// </summary>
        [ForeignKey("TopicId")]
        public virtual Topic.Topic Topic { get; set; }


        /// <summary>
        /// 留言内容
        /// </summary>
        public string Content { get; set; }
    }
}

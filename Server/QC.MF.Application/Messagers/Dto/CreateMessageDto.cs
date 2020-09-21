using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Messagers.Dto
{
    [AutoMap(typeof(Message.Message))]
    public class CreateMessageDto
    {
        /// <summary>
        /// 留言者Id
        /// </summary>
        public int MessagerId { get; set; }
        /// <summary>
        /// 留言主题
        /// </summary>
        public int TopicId { get; set; }
        /// <summary>
        /// 留言内容
        /// </summary>
        public string Content { get; set; }
    }
}

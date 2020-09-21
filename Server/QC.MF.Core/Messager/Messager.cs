using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Messager
{
    public class Messager : FullAuditedEntity, IIdNameEntity
    {
        /// <summary>
        /// 留言者姓名
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 留言者邮箱地址
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// 留言者电话号码
        /// </summary>
        public string PhoneNumber { get; set; }
        /// <summary>
        /// 留言者身份
        /// </summary>
        public MessagerIdentityType IdentityType { get; set; }
        /// <summary>
        /// 留言者所在单位
        /// </summary>
        public string Organization { get; set; }


        /// <summary>
        /// 留言列表
        /// </summary>
        [ForeignKey("MessagerId")]
        public virtual ICollection<Message.Message> Messages { get; set; }
    }
}

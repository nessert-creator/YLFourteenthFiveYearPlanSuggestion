using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QC.MF.Messager;

namespace QC.MF.Messages.Dto
{
    [AutoMap(typeof(Messager.Messager))]
    public class CreateMessagerDto
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
    }
}

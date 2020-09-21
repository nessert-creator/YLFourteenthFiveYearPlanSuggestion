using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Notices.Dto
{
    [AutoMap(typeof(Notice.Notice))]
    public class CreateNoticeDto
    {
        /// <summary>
        /// 公告名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 公告内容
        /// </summary>
        public string Content { get; set; }
        /// <summary>
        /// 公告发布者
        /// </summary>
        public string Author { get; set; }
        /// <summary>
        /// 公告发布日期
        /// </summary>
        public DateTime Pubdate { get; set; }

        /// <summary>
        /// 是否启用
        /// </summary>
        public bool IsUsing { get; set; } = true;
    }
}

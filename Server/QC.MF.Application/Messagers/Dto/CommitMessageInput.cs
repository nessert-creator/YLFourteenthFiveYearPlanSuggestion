using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QC.MF.Messager;

namespace QC.MF.Messagers.Dto
{
    public class CommitMessageInput
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public MessagerIdentityType IdentityType { get; set; }
        public string Organization { get; set; }

        public List<CommitMessageDto> Messages { get; set; } = new List<CommitMessageDto>();
    }
}

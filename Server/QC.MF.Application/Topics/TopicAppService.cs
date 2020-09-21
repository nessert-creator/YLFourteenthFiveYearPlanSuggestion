﻿using Abp.Domain.Repositories;
using QC.MF.CommonDto;
using QC.MF.Topics.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QC.MF.Topics
{
    public class TopicAppService : AsyncMFCrudAppService<Topic.Topic, GetListTopicDto, PagedSortedAndFilteredInputDto, CreateTopicDto, UpdateTopicDto>, ITopicAppService
    {
        public TopicAppService(IRepository<Topic.Topic, int> repository) : base(repository)
        {
        }
    }
}

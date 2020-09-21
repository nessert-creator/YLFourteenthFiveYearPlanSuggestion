import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form } from 'antd';

const create = Form.create;
import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';

function Message({ form, record }) {
	const columns = [
		{
			title: '作者',
			dataIndex: 'messager.name'
		},
		{
			title: '主题',
			dataIndex: 'topic.name'
		},
		{
			title: '内容',
			dataIndex: 'content'
		}
	];

	const filters = [
	];

	const formNode = (
		<Form>
		</Form>
	);
	return (
		<CRUD
			form={form}
			getAllApi={new api.MessageApi().appMessageGetAll}
			columns={columns}
			formNode={formNode}
			filterProps={{
				filters,
				searchProvide: 'sql'
			}}
		/>
	);
}

export default create()(connect((state) => {
	return {
		...state.crud
	};
})(Message));

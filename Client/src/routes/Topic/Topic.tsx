import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input } from 'antd';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { remoteUrl } from './../../utils/url';

const create = Form.create;
const FormItem = Form.Item;

import * as api from '../../api/api';

import CRUD from '../CRUD/CRUD';

function Topic({ form, record }) {
	const columns = [
		{
			title: '名称',
			dataIndex: 'name',
			sorter: true
		},
		{
			title: '图标',
			dataIndex: 'icon',
			render: (text, record) => (text ? <img style={{ height: '50px' }} src={`${remoteUrl}${text}`} /> : null)
		}
	];
	const { getFieldDecorator } = form;
	const formCol = {
		labelCol: { span: 8 },
		wrapperCol: { span: 12 }
	};
	const formNode = (
		<Form>
			<FormItem label="名称" {...formCol}>
				{getFieldDecorator('name', {
					initialValue: record.name,
					rules: [ { required: true, message: '请填写主题名称' } ]
				})(<Input />)}
			</FormItem>
			<FormItem label="主题图标" {...formCol}>
				{getFieldDecorator('icon', {
					initialValue: record.icon,
					rules: [ { required: true, message: '请选择队标' } ]
				})(
					<ImageUpload/>
				)}
			</FormItem>
		</Form>
	);
	const filters = [
		{
			name: 'name',
			displayName: '名称',
			option: 'like'
		}
	];

	return (
		<CRUD
			form={form}
			getAllApi={new api.TopicApi().appTopicGetAll}
			deleteApi={new api.TopicApi().appTopicDelete}
			updateApi={new api.TopicApi().appTopicUpdate}
			createApi={new api.TopicApi().appTopicCreate}
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
})(Topic));

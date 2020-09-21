import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Badge, DatePicker } from 'antd';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
const create = Form.create;
import moment from 'moment';

function Notice({ form, record, loading}) {
	const { getFieldDecorator } = form;
	const formCol = {
		labelCol: { span: 6 },
		wrapperCol: { span: 12 }
	};
	const filters = [
		{
			name: 'name',
			displayName: '名称',
			option: 'like'
		}
	];

    const controls = [ 'headings', 'bold', 'list-ul', 'list-ol', 'blockquote', 'media', 'separator','clear' ]

	function onSubmit(){

	}

	return (
		<Form onSubmit={onSubmit}>
            <Form.Item {...formCol} label="公告标题" style={{display:"inline-block",width:"33%"}}>
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请输入公告标题',
                  },
                ],
                initialValue: record && record.name,
              })(<Input maxLength={32} type="text" placeholder="请输入公告标题" />)}
            </Form.Item> 
			<Form.Item {...formCol} label="公告发布者" style={{display:"inline-block",width:"33%"}}>
              {getFieldDecorator('author', {
                rules: [
                  {
                    required: true,
                    message: '请输入公告发布者',
                  },
                ],
                initialValue: record && record.author,
              })(<Input maxLength={32} type="text" placeholder="请输入公告发布者" />)}
            </Form.Item>
			<Form.Item {...formCol} label="公告发布日期" style={{display:"inline-block",width:"33%"}}>
              {getFieldDecorator('pubdate', {
                rules: [
                  {
                    required: true,
                    message: '请输入公告发布日期',
                  },
                ],
                initialValue: record && record.pubdate,
              })(<DatePicker style={{width:"100%"}}/>)}
            </Form.Item>
            <Form.Item label="公告内容">
              {getFieldDecorator('content', {
                initialValue: BraftEditor.createEditorState((record &&  record.content)?record.content: ""),
              })(<BraftEditor
                style={{border:'1px solid #d1d1d1', borderRadius:5}}
                // controls={controls}
                placeholder="请输入公告内容"
            />)}
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" onClick={() => onSubmit()} loading={loading}>
                保存
              </Button>
              <Button onClick={() => this.props.history.goBack()} style={{ marginLeft: 8 }}>
                取消
              </Button>
            </Form.Item>
          </Form>
	);
}

export default create()(connect((state) => {
	return {
	};
})(Notice));

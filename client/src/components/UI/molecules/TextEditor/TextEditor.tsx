import ReactQuill from 'react-quill';
import React, { useState, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Text } from '../../atoms';
import styles from './textEditor.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { setDetail } from '../../../../redux/PostSlice';

interface TextEditorProps {
  text: string;
  description?: string;
}

const TextEditor = ({ text, description }: TextEditorProps) => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  // 수정 페이지에서만 동작하는 이펙트
  useEffect(() => {
    if (description) setValue(description);
  }, []);

  useEffect(() => {
    dispatch(setDetail(value));
  }, [value]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('text')}>
        <Text weight="regular" size="m">
          {text}
        </Text>
        <Text size="xlg" color="red">
          *
        </Text>
      </div>
      <div className={cx('editor')}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={(value) => setValue(value)}
          placeholder="내용을 입력해주세요"
        />
      </div>
    </div>
  );
};

export default TextEditor;

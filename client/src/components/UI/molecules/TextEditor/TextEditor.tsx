import ReactQuill from 'react-quill';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { Text } from '../../atoms';
import styles from './textEditor.module.scss';
import classNames from 'classnames/bind';
interface TextEditorProps {
  text: string;
}

const TextEditor = ({ text }: TextEditorProps) => {
  const cx = classNames.bind(styles);
  const [value, setValue] = useState('');
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
          onChange={setValue}
          placeholder="내용을 입력해주세요"
        />
      </div>
    </div>
  );
};

export default TextEditor;

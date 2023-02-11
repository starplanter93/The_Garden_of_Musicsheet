import React, { useState, useRef } from 'react';
import styles from './postSidebar.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../atoms';

const PostSidebar = () => {
  const cx = classNames.bind(styles);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: any) => {
    if (e.target.files.length > 0) {
      const [file] = e.target.files;
      if (file.type === 'application/pdf') {
        setFileName(file.name);
      } else {
        alert('Only .pdf files are supported.');
      }
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('upload')}>
        <div className={cx('upload-element')}>
          <div className={cx('icon')}>
            <Icon icon="MdOutlineUploadFile" color="gray" size="xl" />
          </div>
          <div className={cx('text')}>
            <Text weight="bold" size="lg">
              악보 파일 업로드
            </Text>
            <Text weight="semibold" size="m" color="gray">
              .pdf 지원
            </Text>
          </div>
          <div className={cx('btn')}>
            <Button theme="tertiary" size="s" onClick={handleButtonClick}>
              <>
                <Icon icon="MdUpload" />
                <Text>파일 선택</Text>
              </>
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
              accept="application/pdf"
            />
          </div>
        </div>
      </div>
      <div className={cx('uploaded')}>
        <div className={cx('text-below')}>
          <Text weight="semibold" size="lg">
            악보 파일
          </Text>
          <Text size="xlg" color="red">
            *
          </Text>
        </div>
        <div className={cx('box')}>
          {fileName && <span className={cx('file-name')}>{fileName}</span>}
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;

import React, { useState, useRef, useEffect } from 'react';
import styles from './postSidebar.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../atoms';

const PostSidebar = () => {
  const cx = classNames.bind(styles);
  const [fileName, setFileName] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: any) => {
    if (e.target.files.length > 0) {
      const [file] = e.target.files;
      if (file.type === 'application/pdf') {
        const fileBlob = new Blob([file], { type: file.type });
        setFileName(file.name);
      } else {
        alert('Only .pdf files are supported.');
      }
    }
  };

  // const uploadFirebase = async (fileBlob: Blob, fileName: string) => {
  //   const uploadTask = uploadBytesResumable(sheetRef, fileBlob);

  //   uploadTask.on(
  //     'state_changed',
  //     (snapshot: any) => {
  //       setUploadProgress(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     },
  //     () => {
  //       console.log('File successfully uploaded to Firebase!');
  //     }
  //   );
  // };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      console.log(fileInputRef.current, fileName);
    }
  };
  useEffect(() => {
    console.log(fileInputRef.current, fileName);
    if (!fileName && fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [fileName]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('upload')}>
        <div className={cx('upload-element')}>
          <div>
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
          <div>
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
        {fileName && (
          <div className={cx('box')}>
            <div className={cx('file-name')}>
              <span>{fileName}</span>
              <Button
                size="tiny"
                theme="transparent"
                onClick={() => {
                  setFileName('');
                }}
              >
                <Icon icon="FaTrash" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(PostSidebar);

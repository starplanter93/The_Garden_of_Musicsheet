import React, { useState, useRef, useEffect } from 'react';
import styles from './postSidebar.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../atoms';
import { useDispatch } from 'react-redux';
import { setFile } from '../../../../redux/FileSlice';
import { postPDF } from '../../../../firebase/firebase';
import { setDownloadURL } from '../../../../redux/PostSlice';

interface PostSidebarProps {
  url?: string;
}

const PostSidebar = ({ url }: PostSidebarProps) => {
  const dispatch = useDispatch();
  const cx = classNames.bind(styles);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 수정 페이지에서만 동작하는 이펙트
  useEffect(() => {
    if (url) {
      const decodedURI = decodeURI(url);
      const uploadedFile = decodedURI.match(/(%2F)(.+)\?/) as RegExpMatchArray;
      setFileName(uploadedFile[2]);
      dispatch(setDownloadURL(url));
    }
  }, []);

  const handleFileUpload = async (e: any) => {
    if (e.target.files.length > 0) {
      const [file] = e.target.files;
      if (file.type === 'application/pdf') {
        try {
          const sheetURL = await postPDF(file);
          dispatch(setDownloadURL(sheetURL));
        } catch (err) {
          console.log(err);
        }
        setFileName(file.name);
      } else {
        alert('Only .pdf files are supported.');
      }
      dispatch(setFile(file));
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  useEffect(() => {
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
                <Icon icon="MdUpload" size="s" />
                <Text>파일 선택</Text>
              </>
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => handleFileUpload(e)}
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
                theme="secondary"
                onClick={() => {
                  setFileName('');
                }}
              >
                <Icon icon="FaTrash" size="xs" color="gray" />
              </Button>
            </div>
          </div>
        )}
        <div className={cx('upload-info')}>
          <Icon icon="MdInfoOutline" size="xs" color="gray" />
          <Text size="s" weight="medium" color="gray">
            한개의 악보 파일(.pdf)만 업로드할 수 있습니다.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;

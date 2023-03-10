import React, { useEffect } from 'react';
import { Input, Text, Icon, ImgLayout, Button } from '../../atoms';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './postInput.module.scss';
import {
  getSearchData,
  refreshToken,
} from '../../../../utils/ApiCollection/SearchData';
import { useDispatch } from 'react-redux';
import {
  setPrice,
  setURL,
  setArtist,
  setSongName,
  setAlbumImg,
  setScoreName,
} from '../../../../redux/PostSlice';
import { ScoreInfoType } from '../../../pages/Main/Main';
import { useLocation } from 'react-router-dom';

interface PostInputProps {
  text: string;
  placeholder?: string;
  type: 'input' | 'dropdown';
  value?: ScoreInfoType;
}

interface SelectedDataProps {
  songName: string;
  artist: string;
  albumCover: string;
}

const PostInput = ({ type, text, placeholder, value }: PostInputProps) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState(''); // 곡 제목에서 받아온 걸 넣어주면 될 듯
  const [searchData, setSearchData] = useState([]);
  const [selectedData, setSelectedData] = useState<SelectedDataProps>();

  // 수정 페이지에서만 동작하는 이펙트
  useEffect(() => {
    if (value) {
      if (text === '악보 제목') setUserInput(value.scoreName);
      else if (text === '가격') setUserInput(value.price);
      else if (text === '유튜브 주소 (선택)') setUserInput(value.youtubeURL);

      setSelectedData({
        songName: value.songName,
        artist: value.artist,
        albumCover: value.albumImg,
      });
    }
  }, []);

  useEffect(() => {
    if (userInput.length > 0) {
      if (text === '악보 제목') dispatch(setScoreName(userInput));
      else if (text === '가격') dispatch(setPrice(userInput));
      else if (text === '유튜브 주소 (선택)') dispatch(setURL(userInput));
      getSearchData(userInput).then((response) => {
        switch (response.status) {
          default:
            setSearchData(response);
            break;
          case 401:
            refreshToken();
            break;
        }
      });
    }
  }, [userInput]);

  const cx = classNames.bind(styles);

  const handleOnClick = (el: any) => {
    setSelectedData({
      albumCover: el.album.images[0].url,
      artist: el.artists[0].name,
      songName: el.name,
    });
    setUserInput('');
  };

  useEffect(() => {
    if (selectedData) {
      dispatch(setArtist(selectedData.artist));
      dispatch(setSongName(selectedData.songName));
      dispatch(setAlbumImg(selectedData.albumCover));
    }
  }, [selectedData]);

  const AutoComplete = () => {
    if (userInput && isFocused) {
      return (
        <div
          className={cx(selectedData ? 'dropdown-wrapper' : 'dropdown-default')}
        >
          <div className={cx('dropdown')}>
            {searchData.map((el: any, idx: number) => {
              if (el !== null)
                return (
                  <div
                    onClick={() => handleOnClick(el)}
                    role="button"
                    key={idx}
                    className={cx('dropdown-result')}
                  >
                    <div className={cx('result-img')}>
                      <img
                        width="50px"
                        src={el.album.images[0]?.url}
                        alt="album-cover"
                      />
                    </div>
                    <div className={cx('result-info')}>
                      <span>{el.name}</span>
                      <span>{el.artists[0].name}</span>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      );
    } else return null;
  };

  const Selection = () => {
    if (selectedData) {
      return (
        <div className={cx('selected-result')}>
          <div className={cx('result-info-icon')}>
            <div className={cx('result-img')}>
              <ImgLayout
                shape="square"
                size="s"
                alt="앨범커버"
                src={selectedData.albumCover}
              />
            </div>
            <div className={cx('result-info')}>
              <Text>{selectedData?.songName}</Text>
              <Text size="s">{selectedData?.artist}</Text>
            </div>
          </div>
          <div className={cx('delete-btn')}>
            <Button
              size="tiny"
              theme="transparent"
              onClick={() => {
                setSelectedData(undefined);
              }}
            >
              <Icon icon="MdOutlineRemoveCircle" color="gray" />
            </Button>
          </div>
        </div>
      );
    } else return null;
  };

  if (type === 'input') {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('text')}>
          <Text weight="regular" size="m">
            {text}
          </Text>
          {text !== '유튜브 주소 (선택)' ? (
            <Text size="xlg" color="red">
              *
            </Text>
          ) : null}
        </div>
        <div className={cx('text')}>
          <Input
            theme="basic"
            size="l"
            setIsFocused={setIsFocused}
            setUserInput={setUserInput}
            userInput={userInput}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  } else if (type === 'dropdown') {
    return (
      <div className={cx('wrapper', pathname.includes('/edit') && 'editmode')}>
        <div className={cx('text')}>
          <Text weight="regular" size="m">
            {text}
          </Text>
          <Text size="xlg" color="red">
            *
          </Text>
        </div>
        {pathname.includes('/edit') || (
          <>
            <div className={cx(selectedData ? 'search' : 'default')}>
              <div className={cx('icon')}>
                <Icon icon="BiSearch" color="gray" />
              </div>
              <div className={cx('input')}>
                <Input
                  theme="icon-input-no-label"
                  size="m"
                  setIsFocused={setIsFocused}
                  setUserInput={setUserInput}
                  placeholder={placeholder}
                />
              </div>
            </div>
            <AutoComplete />
          </>
        )}
        <Selection />
      </div>
    );
  } else return null;
};

export default React.memo(PostInput);

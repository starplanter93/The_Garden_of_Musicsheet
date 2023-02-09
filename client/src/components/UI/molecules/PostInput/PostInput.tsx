import React, { useEffect } from 'react';
import { Input, Text, Icon, ImgLayout, Button } from '../../atoms';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './postInput.module.scss';
import axios from 'axios';

interface PostInputProps {
  text: string;
  placeholder: string;
  type: 'input' | 'dropdown';
}

interface SelectedDataProps {
  songName: string;
  artist: string;
  albumCover: string;
}

const PostInput = ({ type, text, placeholder }: PostInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState(''); // 곡 제목에서 받아온 걸 넣어주면 될 듯
  const [searchData, setSearchData] = useState([]);
  const [selectedData, setSelectedData] = useState<SelectedDataProps>();

  const Token =
    'BQCZl98GeQDFHWBkHPQtRgoIdNghs14ejVcIA8UDOZ9Iom7ll9C5IBmxxp4P7dJ5vqernmaLP6orPHQmSj6UM038M_vum8zMmc5gSkM8523OJ91xCpgxS1alPgohUFfqiNUxls9pXwkmifYqXNfoyUIkWegihzIn_XBRPdWy65ALtNLqYKAi4n5lpjT_9cOQYDgvFYDqDSKlXfldwLgsWAUi';

  useEffect(() => {
    if (userInput.length > 0) {
      axios
        .get('https://api.spotify.com/v1/search', {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          params: {
            q: userInput,
            type: 'track',
            limit: 10,
          },
        })
        .then((data) => setSearchData(data.data.tracks.items));
    }
  }, [userInput]);
  const cx = classNames.bind(styles);

  const AutoComplete = () => {
    const handleOnClick = (el: any) => {
      setSelectedData({
        albumCover: el.album.images[0].url,
        artist: el.artists[0].name,
        songName: el.name,
      });
      setUserInput('');
    };

    if (userInput) {
      return (
        <div
          className={cx(selectedData ? 'dropdown-wrapper' : 'dropdown-default')}
        >
          <div className={cx('dropdown')}>
            {searchData.map((el: any, idx: number) => {
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
                      src={el.album.images[0].url}
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
          <div>
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
        </div>
        <div className={cx('text')}>
          <Input
            theme="basic"
            size="m"
            setIsFocused={setIsFocused}
            setUserInput={setUserInput}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  } else if (type === 'dropdown') {
    return (
      <div className={cx('wrapper')}>
        <div className={cx('text')}>
          <Text weight="regular" size="m">
            {text}
          </Text>
        </div>
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
        <Selection />
      </div>
    );
  } else return null;
};

export default React.memo(PostInput);

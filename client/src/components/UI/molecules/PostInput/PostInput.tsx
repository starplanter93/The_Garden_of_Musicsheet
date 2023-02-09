import React, { useEffect } from 'react';
import { Input, Text, Icon, ImgLayout } from '../../atoms';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './postInput.module.scss';
import axios from 'axios';
import { auth } from '../../../../firebase/firebase';

interface PostInputProps {
  text: string;
  placeholder: string;
  type: 'input' | 'dropdown';
}

const PostInput = ({ type, text, placeholder }: PostInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [searchData, setSearchData] = useState([]);

  console.log(userInput);
  const Token =
    'BQBGpJREXmve8HyN6d7IsTtjS90oLyQfmbUCQb0DFuiXJShkelM2C27D8sANLOKBFm2sxlvb-oCXgjdxwJpDhkKCde5trJtS5NTyDcyaei6yces-g5fJuVpYdD7f3dafssUbKru0vQ6YwX-WXfSXCcJ3524oR1q5DCJ9v9QolyzbdkIprwCh_hPqu2bfTB60N9C1-Og9SiJZhv0d2E9yuKkS';

  useEffect(() => {
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
  }, [userInput]);
  const cx = classNames.bind(styles);

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
        <div className={cx('search')}>
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
        <div className={cx('dropdown-wrapper')}>
          <div className={cx('dropdown')}>
            {searchData.map((el: any, idx: number) => {
              return (
                <ul key={idx} className={cx('dropdown-result')}>
                  <li className={cx('result-img')}>
                    <img
                      width="50px"
                      src={el.album.images[0].url}
                      alt="album-cover"
                    />
                  </li>
                  <li className={cx('result-info')}>
                    <span>{el.name}</span>
                    <span>{el.artists[0].name}</span>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className={cx('selected-result')}>
          <div className={cx('result-info-icon')}>
            <div className={cx('result-img')}>
              <ImgLayout shape="square" size="s" alt="앨범커버" />
            </div>
            <div className={cx('result-info')}>
              <Text>사건의 지평선</Text>
              <Text size="s">윤하</Text>
            </div>
          </div>
          <div>
            <Icon icon="MdOutlineRemoveCircle" color="gray" />
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default React.memo(PostInput);

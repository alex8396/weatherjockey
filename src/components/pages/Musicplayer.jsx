import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import { Link } from 'react-router-dom'

// 리덕스
import { useSelector, useDispatch } from 'react-redux'

function MusicText({ musicDetail }) {
  console.log('함수가 반환하는 값 : ', musicDetail)
  return (
    <div className="music__player__subcont">
      <div className="music__player">
        <div className="music_player_ctrl">
          <div className="music_player_title_container">
            <Link to={`/`}>〈</Link>
            <h2>
              Now <strong>Playing.</strong>
            </h2>
          </div>
          <div className="music_player_utility_container">
            <a
              href={`${musicDetail.ranking.hub.actions[1].uri}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/align-text-bottom.png"
                alt="음원 다운로드"
              />
              다운로드
            </a>
            <a
              href={`${musicDetail.ranking.url}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/share.svg"
                alt="샤잠 바로가기"
              />
              Shazam
            </a>
            <a
              href={`${musicDetail.ranking.hub.options[0].actions[0].uri}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/apple.svg"
                alt="샤잠 바로가기"
              />
              Apple
            </a>
          </div>
          <div className="inner_album_art">
            <img src={musicDetail.ranking.images.coverart} alt="" />
            <div className="greencircle"></div>
            <div className="musicpoint"></div>
          </div>
          <p>{musicDetail.ranking.subtitle}</p>
          <p className="music__tit">{musicDetail.ranking.title.slice(0, 20)}</p>
          <audio
            className="audiobox"
            src={`${musicDetail.ranking.hub.actions[1].uri}`}
            type="audio/m4a"
            controls
            autoPlay
          >
            <source
              src={`${musicDetail.ranking.hub.actions[1].uri}`}
              type="audio/m4a"
            />
          </audio>
        </div>
        {/* <div className="music_player_lyric">
          <h3>Lyric</h3>
          <div className="lyric_inner">
            "Have Yourself A Merry Little Christmas"(originally by Judy Garland)
            <br />
            <br />
            Have yourself a merry little Christmas
            <br />
            <br />
            Let your heart be light
            <br />
            <br />
            From now on our troubles will be out of sight
            <br />
            <br />
            Have yourself a merry little Christmas
            <br />
            <br />
            Make the Yuletide gay
            <br />
            <br />
            From now on our troubles will be miles away
            <br />
            <br />
            Here we are as in olden days
            <br />
            <br />
            Happy golden days of yore
            <br />
            <br />
            Faithful friends who are dear to us
            <br />
            <br />
            Gather near to us once more
            <br />
            <br />
            Through the years we all will be together
          </div>
        </div> */}
      </div>
    </div>
  )
}

const Musicplayer = () => {
  console.log('실행')
  const musicDetail = useSelector((state) => state.counter.text)

  console.log('musicDetail : ', musicDetail)
  // const [musicDetail, setMusicDetail] = useState(null)

  // const { key } = useParams()

  // useEffect(() => {
  //   fetchAPI(`songs/get-details?key=${key}&locale=ko-KR`).then((data) =>
  //     setMusicDetail(data)
  //   )
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // if (!musicDetail?.length) return <Loader />
  return (
    <>
      <Header />
      <main id="main" className="musicplayer_inside">
        <section id="contents" className="musicplayer_inside">
          <div className="outer_album_art">
            <img src={`${musicDetail.ranking.images.coverart}`} alt="" />
          </div>
          <div className="music__player__subcont">
            <div className="music__player">
              <div className="music_player_ctrl">
                <div className="music_player_title_container">
                  <Link to={`/`}>〈</Link>
                  <h2>
                    Now <strong>Playing.</strong>
                  </h2>
                </div>
                <div className="music_player_utility_container">
                  <a
                    href={`${musicDetail.ranking.hub.actions[1].uri}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/align-text-bottom.png"
                      alt="음원 다운로드"
                    />
                    다운로드
                  </a>
                  <a
                    href={`${musicDetail.ranking.url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/share.svg"
                      alt="샤잠 바로가기"
                    />
                    Shazam
                  </a>
                  <a
                    href={`${musicDetail.ranking.hub.options[0].actions[0].uri}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/apple.svg"
                      alt="샤잠 바로가기"
                    />
                    Apple
                  </a>
                </div>
                <div className="inner_album_art">
                  <img src={musicDetail.ranking.images.coverart} alt="" />
                  <div className="greencircle"></div>
                  <div className="musicpoint"></div>
                </div>
                <p>{musicDetail.ranking.subtitle}</p>
                <p className="music__tit">
                  {musicDetail.ranking.title.slice(0, 20)}
                </p>
                <audio
                  className="audiobox"
                  src={`${musicDetail.ranking.hub.actions[1].uri}`}
                  type="audio/m4a"
                  controls
                  autoPlay
                >
                  <source
                    src={`${musicDetail.ranking.hub.actions[1].uri}`}
                    type="audio/m4a"
                  />
                </audio>
              </div>
              {/* <div className="music_player_lyric">
          <h3>Lyric</h3>
          <div className="lyric_inner">
            "Have Yourself A Merry Little Christmas"(originally by Judy Garland)
            <br />
            <br />
            Have yourself a merry little Christmas
            <br />
            <br />
            Let your heart be light
            <br />
            <br />
            From now on our troubles will be out of sight
            <br />
            <br />
            Have yourself a merry little Christmas
            <br />
            <br />
            Make the Yuletide gay
            <br />
            <br />
            From now on our troubles will be miles away
            <br />
            <br />
            Here we are as in olden days
            <br />
            <br />
            Happy golden days of yore
            <br />
            <br />
            Faithful friends who are dear to us
            <br />
            <br />
            Gather near to us once more
            <br />
            <br />
            Through the years we all will be together
          </div>
        </div> */}
            </div>
          </div>
          {/* <MusicText musicDetail={musicDetail} /> */}
        </section>
      </main>
    </>
  )
}

export default Musicplayer

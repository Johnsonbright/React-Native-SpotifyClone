import { Track } from "react-native-track-player"

export const playListData: Track[] = [
  {
    id: 1,
    title: 'New Cat',
    artist: 'Shallipopi',
    album: 'Afrobeatz',
    artwork:
    "https://trendybeatz.com/images/Shallipopi-Shakespopi-AlbumArtwork1.jpg" ,
    url: require('./assets/audio1.mp3'),
  },
  {
    id: 2,
    title: 'Money-Love',
    artist: 'Wizkid',
    album: 'Afrobeatz',
    artwork:
      "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfGtX5NN2MbenfHjTqDeVaD7Hmx-RBgZEAw&s"
,
    url: require('./assets/audio2.mp3'),
  },
  {
    id: 3,
    title: 'Lazy-day',
    artist: 'DeLight',
    album: 'stylish futuristic chill',
    artwork:
      "https://lh3.googleusercontent.com/ogw/AF2bZyhUVbQiYGAC6gBs9Q9cWPlECgREVGXHtHSuG7SRH2uHhxU=s64-c-mo" ,
    url: require('./assets/audio3.mp3'),
  },
  {
    id: 4,
    title: " Sound Track",
    artist: 'Dj Ife',
    album: 'Beatz',
    artwork:
      '	https://cdn.pixabay.com/audio/2023/06/27/09-14-26-99_200x200.jpg',
    url: require('./assets/audio4.mp3'),
  },
]
const Avatar = () => {
  const arr = [
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar1.png?alt=media&token=a10690ce-65fd-402c-8e3f-b520188a8ba1',
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar2.png?alt=media&token=01cf9cab-19a3-4b43-bc85-4f2b89ce4a6c',
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar3.png?alt=media&token=1590e709-6a09-43f2-88a7-32cb1fa17945',
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar4.png?alt=media&token=82d0c030-336f-4242-9fda-4ed9df9d87e5',
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar5.png?alt=media&token=504d877f-d80a-47a9-a0c3-844846f58e26',
    'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/avatar%2Favatar6.png?alt=media&token=31a5d9e4-8540-459d-91dd-e0bd3812ba28',
  ];

  return arr[Math.floor(Math.random() * (6 - 1) + 1)];
};

export default Avatar;

import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "旅行 在路上",
      imgUrl:
        "//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 2,
      title: "历史",
      imgUrl:
        "//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "其实，我们穷的连时间都不剩了",
      desc:
        "文|赵晓璃 写在前面的话：对很多职场人而言，时间无疑是最珍贵最稀缺的资源。不论自我提升还是拓展其他职业道路，都需要大把的时间；与此同时，很多...",
      imUrl:
        "//upload-images.jianshu.io/upload_images/1096130-d99c842c255c3912.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 2,
      title: "其实，我们穷的连时间都不剩了",
      desc:
        "文|赵晓璃 写在前面的话：对很多职场人而言，时间无疑是最珍贵最稀缺的资源。不论自我提升还是拓展其他职业道路，都需要大把的时间；与此同时，很多...",
      imUrl:
        "//upload-images.jianshu.io/upload_images/1096130-d99c842c255c3912.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 3,
      title: "其实，我们穷的连时间都不剩了",
      desc:
        "文|赵晓璃 写在前面的话：对很多职场人而言，时间无疑是最珍贵最稀缺的资源。不论自我提升还是拓展其他职业道路，都需要大把的时间；与此同时，很多...",
      imUrl:
        "//upload-images.jianshu.io/upload_images/1096130-d99c842c255c3912.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 4,
      title: "其实，我们穷的连时间都不剩了",
      desc:
        "文|赵晓璃 写在前面的话：对很多职场人而言，时间无疑是最珍贵最稀缺的资源。不论自我提升还是拓展其他职业道路，都需要大把的时间；与此同时，很多...",
      imUrl:
        "//upload-images.jianshu.io/upload_images/1096130-d99c842c255c3912.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 5,
      title: "其实，我们穷的连时间都不剩了",
      desc:
        "文|赵晓璃 写在前面的话：对很多职场人而言，时间无疑是最珍贵最稀缺的资源。不论自我提升还是拓展其他职业道路，都需要大把的时间；与此同时，很多...",
      imUrl:
        "//upload-images.jianshu.io/upload_images/1096130-d99c842c255c3912.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
  ]
});

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前immutable对象的值
  // 和设置的值，返回一个全新的对象，没有改变之前的数据
  switch (action.type) {
    default:
      return state;
  }
};

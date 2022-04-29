import SCHomeView from "../views/SCHomeView"
import SCBookmarkView from "../views/SCBookmarkView"

const router = [
  {
    "id": "homeView",
    "path": "/",
    "element": SCHomeView
  },
  {
    "id": "bookmarkView",
    "path": "/bookmark",
    "element": SCBookmarkView
  }
]

export default router

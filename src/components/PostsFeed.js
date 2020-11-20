// src/components/PostsFeed.js
import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { fetchNext5Posts } from "../store/feed/actions";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const dispatch = useDispatch();

  const feed = useSelector(selectFeedPosts);
  const feedLoading = useSelector(selectFeedLoading);

  console.log("posts from redux?", feed);
  console.log(feedLoading);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {feed.posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title} </h3>
            </Link>

            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              <span className="tags">
                {post.tags.map((tag) => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span className="Tag">{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
            <p>{post.content}</p>
          </div>
        );
      })}
      <p>
        {feedLoading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
        )}
      </p>
    </div>
  );
}

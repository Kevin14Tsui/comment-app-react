const Comment = ({ comment, replies }) => {
  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <img src="/user-icon.png" />
      </div>
      <div className="comment-right-part">
        {" "}
        <div className="comment-right-part">
          <div className="comment-author">{comment.username}</div>
          <div>{comment.createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                // setActiveComment={setActiveComment}
                // activeComment={activeComment}
                // updateComment={updateComment}
                // deleteComment={deleteComment}
                // addComment={addComment}
                // parentId={comment.id}
                replies={[]}
                // currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;

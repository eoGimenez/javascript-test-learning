import { sendDataRequest } from '../util/http.js';
import { validateNotEmpty } from '../util/validation.js';

export function savePost(postData) {
  postData.created = new Date();
  return sendDataRequest(postData);
}

export function extractPostData(form) {
  const title = form.get('title');
  const content = form.get('content');
  if (typeof title == 'string') {
    validateNotEmpty(title, 'A title must be provided.');
  } else validateNotEmpty(title, 'The title must be an string')
  validateNotEmpty(content, 'Content must not be empty!');

  return { title, content };
}

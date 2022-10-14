export const EMAILS_NEWSLETTER = "SAVE_EMAILS_NEWSLETTER";

export function saveEmails(email) {
  return function (dispatch) {
    dispatch({
      type: EMAILS_NEWSLETTER,
      payload: email,
    });
  };
}

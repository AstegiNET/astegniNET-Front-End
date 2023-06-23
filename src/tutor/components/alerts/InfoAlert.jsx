export default function InfoAlert({sharedLink}){
    return navigator.clipboard.writeText(sharedLink).then(() => {
        // Display an alert box with a message
        window.alert("Link copied to clipboard!");
      });
}
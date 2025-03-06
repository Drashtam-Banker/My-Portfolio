// error.controller.js

// Function to handle errors in API requests
function handleError(req, res, err) {
    console.error('Error occurred:', err);

    // Send a structured error response
    res.status(500).json({
        message: 'Something went wrong, please try again later.',
        error: err.message || 'Unknown error',
    });
}

function getErrorMessage(errMsg) {
    console.log(errMsg);
}

// Named exports instead of module.exports
export { getErrorMessage, handleError };


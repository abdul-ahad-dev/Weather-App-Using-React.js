const Loading = ({ size = 'medium', color = 'bg-white', padding = '' }) => {
    let dotSize, dotPadding;

    // Adjust dot size based on the text size (small, medium, large)
    switch (size) {
        case 'small':
            dotSize = 'w-2 h-2';
            dotPadding = padding;
            break;
        case 'large':
            dotSize = 'w-6 h-6';
            dotPadding = 'py-4';
            break;

        case 'medium':
        default:
            dotSize = 'w-4 h-4';
            dotPadding = padding;
            break;
    }

    return (
        <div className={`${dotPadding} flex justify-center items-center space-x-1`}>
            <div className={`${dotSize} ${color} rounded-full animate-bounce`}></div>
            <div className={`${dotSize} ${color} rounded-full animate-bounce`}></div>
            <div className={`${dotSize} ${color} rounded-full animate-bounce`}></div>
        </div>
    );
};

export default Loading
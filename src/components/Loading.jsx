const Loading = ({ size = 'medium', color = 'bg-white', padding = '' }) => {
    let dotSize, dotPadding;

    switch (size) {
        case 'small':
            dotSize = 'w-1 h-2';
            dotPadding = padding;
            break;
        case 'large':
            dotSize = 'w-4 h-8';
            dotPadding = 'py-4';
            break;
        case 'medium':
        default:
            dotSize = 'w-3 h-6';
            dotPadding = padding;
            break;
    }

    return (
        <div className={`${dotPadding} flex justify-center items-center space-x-1`}>
            <div className={`${dotSize} ${color} animate-bounce delay-75`}></div>
            <div className={`${dotSize} ${color} animate-bounce delay-[0.5s]`}></div>
            <div className={`${dotSize} ${color} animate-bounce delay-[1s]`}></div>
        </div>
    );
};

export default Loading
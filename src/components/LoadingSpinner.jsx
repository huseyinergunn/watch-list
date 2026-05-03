const LoadingSpinner = ({ text = 'Yükleniyor...' }) => (
  <div className="flex flex-col items-center justify-center py-16 gap-4">
    <div className="w-9 h-9 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
    <p className="text-slate-400 text-sm">{text}</p>
  </div>
);

export default LoadingSpinner;

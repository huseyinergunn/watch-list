import { AlertTriangle } from 'lucide-react';

const ApiKeyWarning = () => (
  <div className="flex items-start gap-3 bg-amber-950/50 border border-amber-700/50 rounded-xl p-4 text-amber-300">
    <AlertTriangle size={20} className="shrink-0 mt-0.5" />
    <div>
      <p className="font-semibold text-sm">API Anahtarı Bulunamadı</p>
      <p className="text-xs text-amber-400/80 mt-1 leading-relaxed">
        Proje kökünde{' '}
        <code className="bg-amber-900/60 px-1.5 py-0.5 rounded font-mono">.env</code> dosyası
        oluşturun ve{' '}
        <code className="bg-amber-900/60 px-1.5 py-0.5 rounded font-mono">
          VITE_TMDB_KEY=anahtariniz
        </code>{' '}
        satırını ekleyin.
      </p>
    </div>
  </div>
);

export default ApiKeyWarning;

import React, { useEffect, useState } from 'react';
import Button from './components/Button';

interface ApiResponse {
  message: string;
  data: number[];
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('データの取得に失敗しました', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>React アプリケーション</h1>
      <Button 
        label={loading ? "読み込み中..." : "データを取得"} 
        onClick={fetchData} 
        disabled={loading}
      />
      
      {data && (
        <div className="data-container">
          <h2>取得したデータ</h2>
          <p>{data.message}</p>
          <ul>
            {data.data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App; 
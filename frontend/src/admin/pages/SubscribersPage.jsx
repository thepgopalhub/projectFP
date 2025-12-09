import { useEffect, useState } from "react";
import { API_URL } from "../../api/api";

export default function SubscribersPage() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/newsletter`)
      .then(res => res.json())
      .then(data => setSubs(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Newsletter Subscribers</h1>

      <div className="grid gap-4">
        {subs.map(s => (
          <div key={s._id} className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold">{s.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

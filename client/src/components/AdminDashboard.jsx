import { useState, useEffect } from 'react';
import { ButtonPrimary } from './Button';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, [activeTab]);

  const fetchItems = async () => {
    try {
      const response = await fetch(`/api/${activeTab}`);
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const itemData = Object.fromEntries(formData.entries());
    
    if (activeTab === 'projects') {
      itemData.tags = itemData.tags.split(',').map(tag => tag.trim());
    }

    try {
      const method = editItem ? 'PUT' : 'POST';
      const url = `/api/${activeTab}${editItem ? `/${editItem._id}` : ''}`;
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData)
      });

      if (response.ok) {
        fetchItems();
        setEditItem(null);
        event.target.reset();
      }
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/${activeTab}/${id}`, { method: 'DELETE' });
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="imgSrc" className="label">Image Source</label>
              <input 
                type="text" 
                name="imgSrc" 
                id="imgSrc"
                defaultValue={editItem?.imgSrc}
                className="text-field"
                required 
              />
            </div>
            <div>
              <label htmlFor="label" className="label">Label</label>
              <input 
                type="text" 
                name="label" 
                id="label"
                defaultValue={editItem?.label}
                className="text-field"
                required 
              />
            </div>
            <div>
              <label htmlFor="desc" className="label">Description</label>
              <input 
                type="text" 
                name="desc" 
                id="desc"
                defaultValue={editItem?.desc}
                className="text-field"
                required 
              />
            </div>
            <ButtonPrimary 
              type="submit"
              label={editItem ? "Update Skill" : "Add Skill"}
              classes="w-full justify-center"
            />
          </form>
        );

      case 'projects':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="imgSrc" className="label">Image Source</label>
              <input 
                type="text" 
                name="imgSrc" 
                id="imgSrc"
                defaultValue={editItem?.imgSrc}
                className="text-field"
                required 
              />
            </div>
            <div>
              <label htmlFor="title" className="label">Title</label>
              <input 
                type="text" 
                name="title" 
                id="title"
                defaultValue={editItem?.title}
                className="text-field"
                required 
              />
            </div>
            <div>
              <label htmlFor="tags" className="label">Tags (comma-separated)</label>
              <input 
                type="text" 
                name="tags" 
                id="tags"
                defaultValue={editItem?.tags?.join(', ')}
                className="text-field"
                required 
              />
            </div>
            <div>
              <label htmlFor="projectLink" className="label">Project Link</label>
              <input 
                type="text" 
                name="projectLink" 
                id="projectLink"
                defaultValue={editItem?.projectLink}
                className="text-field"
              />
            </div>
            <ButtonPrimary 
              type="submit"
              label={editItem ? "Update Project" : "Add Project"}
              classes="w-full justify-center"
            />
          </form>
        );

      case 'reviews':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="content" className="label">Content</label>
              <textarea 
                name="content" 
                id="content"
                defaultValue={editItem?.content}
                className="text-field min-h-32"
                required 
              />
            </div>
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                defaultValue={editItem?.name}
                className="text-field"
                required 
              />
            </div>
            <div>
              <label htmlFor="imgSrc" className="label">Image Source</label>
              <input 
                type="text" 
                name="imgSrc" 
                id="imgSrc"
                defaultValue={editItem?.imgSrc}
                className="text-field"
                required 
              />
            </div>
            <div>
              <label htmlFor="company" className="label">Company</label>
              <input 
                type="text" 
                name="company" 
                id="company"
                defaultValue={editItem?.company}
                className="text-field"
                required 
              />
            </div>
            <ButtonPrimary 
              type="submit"
              label={editItem ? "Update Review" : "Add Review"}
              classes="w-full justify-center"
            />
          </form>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--zinc900))] text-[rgb(var(--zinc50))] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="headline-1 mb-8">Admin Dashboard</h1>
        
        <div className="flex gap-4 mb-8">
          {['skills', 'projects', 'reviews'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[rgb(var(--zinc800))] p-6 rounded-xl">
            <h2 className="headline-2 mb-6">Add New {activeTab.slice(0, -1)}</h2>
            {renderForm()}
          </div>

          <div className="bg-[rgb(var(--zinc800))] p-6 rounded-xl">
            <h2 className="headline-2 mb-6">Existing {activeTab}</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item._id} className="bg-[rgb(var(--zinc700))] p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">
                      {item.label || item.title || item.name}
                    </h3>
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => setEditItem(item)}
                        className="btn btn-outline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-outline text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
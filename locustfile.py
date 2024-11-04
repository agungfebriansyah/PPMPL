from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)  # Tunggu antara 1 hingga 5 detik sebelum request

    # Mendapatkan semua pakaian
    @task
    def get_pakaian(self):
        self.client.get("/pakaian")

    # Menambahkan pakaian baru
    @task
    def add_pakaian(self):
        self.client.post("/pakaian", json={"title": "pakaian baru", "author": "desainer C", "year": 2023})

    # Mendapatkan pakaian berdasarkan ID
    @task
    def get_pakaian_by_id(self):
        self.client.get("/pakaian/1")

    # Memperbarui pakaian berdasarkan ID
    @task
    def update_pakaian(self):
        self.client.put("/pakaian/1", json={"title": "pakaian diperbarui", "author": "desainer A", "year": 2024})

    # Menghapus pakaian berdasarkan ID
    @task
    def delete_pakaian(self):
        self.client.delete("/pakaian/1")

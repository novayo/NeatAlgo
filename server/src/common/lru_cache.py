import collections

class LRUCache:
    def __init__(self, capacity: int):
        self.od = collections.OrderedDict()
        self.capacity = capacity

    def exist(self, key):
        return key in self.od

    def get(self, key):
        if key not in self.od:
            return -1
        
        self.od.move_to_end(key)
        return self.od[key]

    def set(self, key, value) -> None:
        self.od[key] = value
        self.od.move_to_end(key)
        
        if len(self.od) > self.capacity:
            self.od.popitem(last=False)
    
    def remove(self, key):
        if key in self.od:
            del self.od[key]

cookie_cache = LRUCache(100)

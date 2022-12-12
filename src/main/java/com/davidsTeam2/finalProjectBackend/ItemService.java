package com.davidsTeam2.finalProjectBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    public ItemService(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }


    public Item save(Item item) {

        return itemRepository.save(item);

    }


    public void delete(int itemId) {

        itemRepository.deleteById(itemId);
    }


    public List<Item> all() {
        return itemRepository.findAll();


    }


    public Item findById(int itemId) {
        Optional<Item> item = itemRepository.findById(itemId);
        boolean isPresent = item.isPresent();
        if (isPresent) {
            return item.get();
        } else {
            return null;
        }
    }
}
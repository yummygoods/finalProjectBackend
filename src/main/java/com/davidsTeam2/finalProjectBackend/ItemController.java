package com.davidsTeam2.finalProjectBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/item")
public class ItemController{
final ItemRepository itemRepository;
final ItemService itemService;

    public ItemController(@Autowired ItemRepository itemRepository, @Autowired ItemService itemService ){
        this.itemRepository = itemRepository;
        this.itemService = itemService;

    }

    @GetMapping ("/all")
    public Iterable<Item> getItems(){

        return itemRepository.findAll();
    }

    @CrossOrigin
    @PostMapping
    public Item save( @RequestBody ItemDto itemDto )
    {
        return itemService.save( new Item( itemDto ) );
    }


    @GetMapping("/{id}")
    public Item findItemById( @PathVariable Integer id ){

        return itemService.findById( id );
    }
    @PutMapping( "/{id}" )
    public Item update( @RequestBody ItemDto itemDto, @PathVariable Integer id )
    {
        Item item = itemService.findById( id );
        item.setName( itemDto.getName() );
        item.setDescription( itemDto.getDescription() );
        item.setImageUrl( itemDto.getImageUrl() );
        return itemService.save( item );
    }

    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }
}
